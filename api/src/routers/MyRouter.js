import { Router } from "express"
import { verifyJWT } from "./../middlewares/verifyJWT.js"

export default class MyRouter {
    constructor() {
        this.router = Router()
        this.init()
    }

    init() {}

    getRouter() {
        return this.router
    }

    get(path, policies, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.handlePolicies(policies), this.applyCallbacks(callbacks))
    }

    post(path, policies, ...callbacks) {
        this.router.post(path, this.generateCustomResponses, this.handlePolicies(policies), this.applyCallbacks(callbacks))
    }

    put(path, policies, ...callbacks) {
        this.router.put(path, this.generateCustomResponses, this.handlePolicies(policies), this.applyCallbacks(callbacks))
    }

    delete(path, policies, ...callbacks) {
        this.router.delete(path, this.generateCustomResponses, this.handlePolicies(policies), this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks) {
        return callbacks.map(callback => async(...params) => {
            try {
                // params (req, res, next)
                // apply apunta directamente a la funcion callback
                // this es para que se utilize en el contexte de la Clase Router
                await callback.apply(this, params)
            } catch (error) {
                // params[1] es el parametro `res`
                params[1].sendServerError(error.message)
            }
        })
    }

    generateCustomResponses = (req, res, next) => {
        res.sendSuccess = payload => res.send({ message: "success", payload })
        res.sendObjectSuccess = (message, payload) => res.send({ message, payload })
        res.sendServerError = error => res.status(500).send({status: "error", error})
        res.sendUserError = error => res.status(400).send({status: "error", error})
        res.sendNoAuthenticadError = error => res.status(401).send({status: "error", error})
        res.sendNoAuthorizatedError = error => res.status(403).send({status: "error", error})
        next()
    }

    handlePolicies = policies => (req, res, next) => {
        if(policies.includes('PUBLIC')) return next()
        const checkAuth = verifyJWT(req)
        if (checkAuth === true) return next()
        return res.sendNoAuthorizatedError(typeof checkAuth === 'string' ? checkAuth : 'Unauthorizated')
    }
}