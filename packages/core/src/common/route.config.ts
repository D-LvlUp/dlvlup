import { Application } from "express";

export abstract class RouteConfig {
    app: Application
    name: string

    protected constructor(app: Application, name: string) {
        this.app = app
        this.name = name
        this.configureRoutes()
    }

    getName(): string {
        return this.name
    }

    abstract configureRoutes(): Application
}
