package com.ust.carbon_footprint_gateway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config>{
    @Autowired
    private RouteValidator routeValidator;

    public static class Config{}

    public AuthenticationFilter(){
        super(Config.class);
    }

    // check this code again
    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange,chain) -> {
            if(routeValidator.isSecured.test(exchange.getRequest())){
                if(!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    throw new RuntimeException("Missing Authorization Header");
                }
                String authHeaderToken = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);

                if(authHeaderToken != null && authHeaderToken.startsWith("Bearer")){
                    authHeaderToken = authHeaderToken.substring(7);
                }

                try{
                    RestClient restClient = RestClient.create();

                    restClient.get()
                            .uri("http://localhost:9091/carbonFootprint/authentication/validateToken?token="+authHeaderToken)
                            .retrieve()
                            .body(Boolean.class);
                } catch (Exception e) {
                    throw new RuntimeException("Invalid access");
                }
            }

            return chain.filter(exchange);
        });
    }

}
