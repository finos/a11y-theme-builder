# Adding Other Storage Options

The Theme Builder is designed to be extensive with regard to it's storage.

The [Storage Interface](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/storage/interface.ts#L1) defines the requirements for the storage used by the Theme Builder application.

The default implementation of this interface for the standalone SDK is [memory storage](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/storage/memStorage.ts#L1); however, as implied by the name, this is not persistent storage.

The default implementation of this interface for the Theme Builder application is [ServerStorage](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/ServerStorage.tsx#L1) which implements a REST-ful client API back to the server.

There is also a [LocalStorage](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/LocalStorage.tsx#L1) that saves the design system in the browser's [localStorage](https://html.spec.whatwg.org/multipage/webstorage.html#the-localstorage-attribute) object. 

In order to support another type of storage, provide a new implementation of the [Storage Interface](https://github.com/discoverfinancial/a11y-theme-builder-sdk/blob/main/src/storage/interface.ts#L1) and pass in an instance of this object when calling `ThemeBuilder.create` from the SDK as is done [here](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/ui/src/pages/DesignSystemPage.tsx#L52);
