import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import WorkwiseState from './context/Workwise/WorkwiseState';
import AuthState from './context/auth/AuthState';
import SimpleReactLightbox from "simple-react-lightbox";

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;
const Signin = lazy(() => import('./components/Signin') );
const Home = lazy(() => import('./components/Dashboard/Home'));


const Invites = lazy(() => import('./components/Visitors/Invites'));
const Devices = lazy(() => import('./components/Visitors/Devices'));
const Settings = lazy(() => import('./components/Visitors/Settings'));

const AllEmployees = lazy(() => import('./components/Employee_directory/AllEmployees'));
const NewEmployee = lazy(() => import('./components/Employee_directory/NewEmployee'));
const MyRooms = lazy(() => import('./components/Rooms/MyRooms'));
const VisitorsLog = lazy(() => import('./components/Visitors/VisitorsLog'));
const ViewRequests = lazy (() => import('./components/Work_requests/ViewRequests'));
const NewRequest = lazy (() => import('./components/Work_requests/NewRequest'));
const ViewMore = lazy (() => import('./components/Work_requests/ViewMore'));
const CreateAsset = lazy (() => import('./components/Work_requests/CreateAsset'));
const ViewAssets = lazy (() => import('./components/Work_requests/ViewAssets'));
const NewInvites = lazy(() => import('./components/Visitors/NewInvites'));
const NewTablet = lazy(() => import('./components/Visitors/NewTablet'));
const Billing = lazy(() => import('./components/Forms/Billing'));
const Bookings = lazy(() => import('./components/Rooms/Bookings'));
const Integrations = lazy(() => import('./components/Forms/Integrations'));
const Deliveries = lazy(() => import('./components/Forms/Deliveries'));

const Recover = lazy(() => import('./components/Pages/Recover'));
const Lock = lazy(() => import('./components/Pages/Lock'));
const NotFound = lazy(() => import('./components/Pages/NotFound'));
const Error500 = lazy(() => import('./components/Pages/Error500'));
const Maintenance = lazy(() => import('./components/Pages/Maintenance'));


const NewRoom = lazy(() => import('./components/Rooms/NewRoom'));


const Profile = lazy(() => import('./components/Profile/Profile'));
// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <AuthState>
                <BasePage>
                    <Suspense fallback={<PageLoader/>}>
                        <Switch location={location}>
                        <Route path="/"  component={waitFor(Signin)}/>
                            <Route path="/recover" component={waitFor(Recover)}/>
                            <Route path="/lock" component={waitFor(Lock)}/>
                            <Route path="/notfound" component={waitFor(NotFound)}/>
                            <Route path="/error500" component={waitFor(Error500)}/>
                            <Route path="/maintenance" component={waitFor(Maintenance)}/>
                        </Switch>
                    </Suspense>
                </BasePage>
            </AuthState>
        )
    }
    else {
        return (
            
            <WorkwiseState>
             <AuthState>
            
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    
                        <Suspense fallback={<PageLoader/>}>
                            <Switch location={location}>
                                
                           
                                {/*Dashboard*/}
                                <Route path="/home"  component={waitFor(Home)}/>    

                                {/*Forms*/}
                                <Route path="/new-invites" component={waitFor(NewInvites)}/>
                                <Route path="/new-tablet" component={waitFor(NewTablet)}/>
                                <Route path="/billing" component={waitFor(Billing)}/>
                                <Route path="/bookings" component={waitFor(Bookings)}/>
                                <Route path="/integrations" component={waitFor(Integrations)}/>
                                <Route path="/deliveries" component={waitFor(Deliveries)}/>

                                {/*Visitors*/}
                                
                                <Route path="/invites" component={waitFor(Invites)}/>
                                <Route path="/devices" component={waitFor(Devices)}/>
                                <Route path="/settings" component={waitFor(Settings)}/>

                                <Route path="/view-requests" component={waitFor(ViewRequests)}/>
                                <Route path="/New-request" component={waitFor(NewRequest)}/>
                                
                                <Route path="/view-more" component={waitFor(ViewMore)}/>
                                {/*Table*/}
                                <Route path="/create-asset" component={waitFor(CreateAsset)}/>
                                {/*Table*/}
                                <Route path="/view-assets" component={waitFor(ViewAssets)}/>
                                {/*Table*/}
                                <Route path="/my-rooms" component={waitFor(MyRooms)}/>
                               
                                <Route path="/visitors-log" component={waitFor(VisitorsLog)}/>
                               

                                {/*Maps*/}
                                <Route path="/all-employees" component={waitFor(AllEmployees)}/>
                                <Route path="/new-employee" component={waitFor(NewEmployee)}/>
                                {/*Extras*/}
                                <Route path="/new-room" component={waitFor(NewRoom)}/>                
                                <Route path="/profile" component={waitFor(Profile)}/>
                                <Redirect to="/home"/>
                            </Switch>
                        </Suspense>
                   
                </CSSTransition>
              </TransitionGroup>
            </Base>
            </AuthState>
            </WorkwiseState>
        )
    }
}

export default withRouter(Routes);