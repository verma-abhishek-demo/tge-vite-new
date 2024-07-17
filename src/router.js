import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ActivitiesPage from './components/ActivitiesPage.vue';
import InnerActivityPage from './components/InnerActivityPage.vue';
import ToursAndDestination from './components/ToursAndDestination.vue';
import ContactPage from './components/ContactPage.vue';
import TripPackageInfo from './components/TripPackageInfo.vue';
import DestinationInfo from './components/DestinationInfo.vue';
import ExplorePackages from './components/ExplorePackages.vue';
import TripTypePage from './components/TripTypePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home_page' },
        { path: '/home_page', component: HomePage, name: 'Home' },
        { path: '/activities_page', component: ActivitiesPage, name: 'Activity' },
        { path: '/inner_activity_page', component: InnerActivityPage, name: 'InnerActivity' },
        { path: '/tours_and_destination', component: ToursAndDestination, name: 'ToursAndDestination' },
        { path: '/contact_page', component: ContactPage, name: 'ContactPage' },
        { path: '/trip_package_info/:id', component: TripPackageInfo, name: 'TripPackageInfo', props: true },
        { path: '/destination_info/:citySlug', component: DestinationInfo, name: 'DestinationInfo', props: true },
        { path: '/explore_packages', component: ExplorePackages, name: 'ExplorePackage' },
        { path: '/trending_trips/:tripSlug', component: TripTypePage, name: 'TripTypePage', props: true }
    ]
});

export default router;