import type { Schema, Struct } from '@strapi/strapi';

export interface GourmetTest extends Struct.ComponentSchema {
  collectionName: 'components_gourmet_tests';
  info: {
    displayName: 'test';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gourmet.test': GourmetTest;
    }
  }
}
