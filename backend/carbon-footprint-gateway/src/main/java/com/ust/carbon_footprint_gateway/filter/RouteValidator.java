package com.ust.carbon_footprint_gateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    // check this code again
    public static final List<String> openEndPoints = List.of(
            "/carbonFootprint/authentication/register",
            "/carbonFootprint/authentication/validateUser",
            "/carbonFootprint/authentication/validateToken");

    public Predicate<ServerHttpRequest> isSecured =
            request -> openEndPoints.stream().noneMatch(
                    uri -> request
                            .getURI()
                            .getPath()
                            .contains(uri));
}
