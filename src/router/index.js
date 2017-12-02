import Vue from 'vue'

import VueRouter from 'vue-router'

//The @ is an alias for the /src directory that was setup in webpack by the Vue command line tool.
import PresentationDetails from '@/components/presentation-details'
import CareDetails from '@/components/care-details'
import PricingDetails from '@/components/pricing-details'
import ContactForm from '@/components/contact-form'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: PresentationDetails},
  {path: '/soins', component: CareDetails},
  {path: '/tarifs', component: PricingDetails},
  {path: '/Contact', component: ContactForm}
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return {x: 0, y: 0}
  }
});


router.replace({path: '/', redirect: '*'});
export default router
