import { LookerNodeSDK, NodeSettings } from "@looker/sdk-node";
import { IApiSettings, IApiSection } from "@looker/sdk-rtl";
/**
 * @class customConfigReader
 *
 * A custom configuration reader that overrides the readConfig() method
 * in NodeSettings to allow fetching client_id and client_secret
 * from anywhere.
 */
class CustomConfigReader extends NodeSettings {
  constructor(settings: IApiSettings) {
    super("", settings);
  }

  /**
   * @returns an IApiSection object containing client_id and client_secret
   */
  readConfig(): IApiSection {
    return {
      client_id: "clientId",
      client_secret: "clientSecret",
    };
  }
}

(async () => {
  const sdk = LookerNodeSDK.init31(
    new CustomConfigReader({
      base_url: "https://<your-looker-server>:19999",
    } as IApiSettings)
  );

  const me = await sdk.ok(
    sdk.me("id, first_name, last_name, display_name, email")
  );
  console.log({ me });
})();
