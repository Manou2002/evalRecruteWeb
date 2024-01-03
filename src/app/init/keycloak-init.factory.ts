import { KeycloakOptions, KeycloakService } from "keycloak-angular";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    const options: KeycloakOptions = {
        config: {
            clientId: "frontend",
            realm: "master",
            url: "http://localhost:8090/"
        },
        loadUserProfileAtStartUp: true,
        initOptions: {
            onLoad: "check-sso",
            checkLoginIframe: false
        },
        bearerExcludedUrls: []
    };
    return (): Promise<any> => keycloak.init(options);
}
