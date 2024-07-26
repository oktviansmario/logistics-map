import { defineStore } from 'pinia';
import apolloClient from '../apollo';
import { gql } from '@apollo/client/core';

// gql query for getting the routes
const GET_ROUTES = gql`
  query GetRoutes {
    routes {
      id
      distance
      subRoutes {
        id
        distance
      }
    }
  }
`;

export const useRouteStore = defineStore('route', {
  state: () => ({
    routes: [],
    loading: false,
  }),
  actions: {
    async fetchRoutes() {
      this.loading = true;
      try {
        const { data } = await apolloClient.query({ query: GET_ROUTES });
        this.routes = data.routes;
      } catch (error) {
        console.error('Error fetching routes:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
