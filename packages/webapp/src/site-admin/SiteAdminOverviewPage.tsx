import { LoadingSpinner } from '@sourcegraph/react-loading-spinner'
import AddIcon from 'mdi-react/AddIcon'
import CityIcon from 'mdi-react/CityIcon'
import EyeIcon from 'mdi-react/EyeIcon'
import SettingsIcon from 'mdi-react/SettingsIcon'
import UserIcon from 'mdi-react/UserIcon'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { gql, queryGraphQL } from '../backend/graphql'
import { OverviewItem, OverviewList } from '../components/Overview'
import { PageTitle } from '../components/PageTitle'
import { eventLogger } from '../tracking/eventLogger'
import { createAggregateError } from '../util/errors'
import { RepositoryIcon } from '../util/icons' // TODO: Switch to mdi icon
import { numberWithCommas, pluralize } from '../util/strings'

interface Props {
    overviewComponents: ReadonlyArray<React.ComponentType>
}

interface State {
    info?: OverviewInfo
}

/**
 * A page displaying an overview of site admin information.
 */
export class SiteAdminOverviewPage extends React.Component<Props, State> {
    public state: State = {}

    private subscriptions = new Subscription()

    public componentDidMount(): void {
        eventLogger.logViewEvent('SiteAdminOverview')

        this.subscriptions.add(fetchOverview().subscribe(info => this.setState({ info })))
    }

    public componentWillUnmount(): void {
        this.subscriptions.unsubscribe()
    }

    public render(): JSX.Element | null {
        return (
            <div className="site-admin-overview-page">
                <PageTitle title="Overview - Admin" />
                {this.props.overviewComponents.length > 0 && (
                    <div className="mb-4">{this.props.overviewComponents.map((C, i) => <C key={i} />)}</div>
                )}
                {!this.state.info && <LoadingSpinner className="icon-inline" />}
                <OverviewList>
                    {this.state.info && (
                        <OverviewItem
                            link="/explore"
                            icon={EyeIcon}
                            actions={
                                <Link to="/explore" className="btn btn-primary btn-sm">
                                    Explore
                                </Link>
                            }
                        >
                            Explore
                        </OverviewItem>
                    )}
                    {this.state.info && (
                        <OverviewItem
                            link="/site-admin/repositories"
                            icon={RepositoryIcon}
                            actions={
                                <>
                                    <Link to="/site-admin/configuration" className="btn btn-primary btn-sm">
                                        <SettingsIcon className="icon-inline" /> Configure repositories
                                    </Link>
                                    <Link to="/site-admin/repositories" className="btn btn-secondary btn-sm">
                                        View all
                                    </Link>
                                </>
                            }
                        >
                            {numberWithCommas(this.state.info.repositories)}&nbsp;
                            {this.state.info.repositories !== null
                                ? pluralize('repository', this.state.info.repositories, 'repositories')
                                : '?'}
                        </OverviewItem>
                    )}
                    {this.state.info && (
                        <OverviewItem
                            link="/site-admin/users"
                            icon={UserIcon}
                            actions={
                                <>
                                    <Link to="/site-admin/users/new" className="btn btn-primary btn-sm">
                                        <AddIcon className="icon-inline" /> Create user account
                                    </Link>
                                    <Link to="/site-admin/configuration" className="btn btn-secondary btn-sm">
                                        <SettingsIcon className="icon-inline" /> Configure SSO
                                    </Link>
                                    <Link to="/site-admin/users" className="btn btn-secondary btn-sm">
                                        View all
                                    </Link>
                                </>
                            }
                        >
                            {numberWithCommas(this.state.info.users)}&nbsp;{pluralize('user', this.state.info.users)}
                        </OverviewItem>
                    )}
                    {this.state.info && (
                        <OverviewItem
                            link="/site-admin/organizations"
                            icon={CityIcon}
                            actions={
                                <>
                                    <Link to="/organizations/new" className="btn btn-primary btn-sm">
                                        <AddIcon className="icon-inline" /> Create organization
                                    </Link>
                                    <Link to="/site-admin/organizations" className="btn btn-secondary btn-sm">
                                        View all
                                    </Link>
                                </>
                            }
                        >
                            {numberWithCommas(this.state.info.orgs)}&nbsp;{pluralize(
                                'organization',
                                this.state.info.orgs
                            )}
                        </OverviewItem>
                    )}
                </OverviewList>
            </div>
        )
    }
}

interface OverviewInfo {
    repositories: number | null
    users: number
    orgs: number
}

function fetchOverview(): Observable<OverviewInfo> {
    return queryGraphQL(gql`
        query Overview {
            repositories {
                totalCount(precise: true)
            }
            users {
                totalCount
            }
            organizations {
                totalCount
            }
        }
    `).pipe(
        map(({ data, errors }) => {
            if (!data || !data.repositories || !data.users || !data.organizations) {
                throw createAggregateError(errors)
            }
            return {
                repositories: data.repositories.totalCount,
                users: data.users.totalCount,
                orgs: data.organizations.totalCount,
            }
        })
    )
}
