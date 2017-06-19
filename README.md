# Samsung Pay S2P JavaScript SDK

> **WARNING:** this SDK is currently under active development and NOT officially released yet. For release plan please check [Samsung Pay](http://www.samsung.com/us/samsung-pay/) for further information.

S2P SDK will grant Samsung Pay registered merchants capabilities of easily integrating `Save to Samsung Pay` button on membership websites. With integrated `Save to Samsung Pay` button, end users can simply add membership cards from merchant's websites to `Samsung Pay`.  

## Usages

  >  **Note:** please consider the unit test within repository as a general guideline about How to Use S2P SDK. In the test, most use cases have been demonstrated.

1. Use S2P server side SDK (currently support Java implementation, check the details of [S2P Java SDK](https://github.com/initor/s2p-java)) to construct a valid `S2PRequest` object and pass it via View-Model to the target view

2. Include the `s2p.js` in the target view, in which a generated `S2PRequest` object is expected, the view should look like
    ```html
    <div id="S2P-root" s2p-req="{S2PRequest}"></div>
    <script src="{public_files}/s2p.js"></script>
    ```