enum Routes {
    driverHome = 'driverHome',
    auth = 'auth',
    driverMapView = 'driverMapView',
    driverOrderMap = 'driverOrderMap',
    driverTravels = 'driverTravels',
    driverAlerts = 'driverAlerts',
    driverPrivateArea = 'driverPrivateArea',
    myWallet = 'myWallet',
    historyTravels = 'historyTravels',
    notifications = 'notifications',
    updates = 'updates',
    settings = 'settings',
    driverMyWallet = 'driverMyWallet',
    passenger = 'passenger',
    passengerMapView = 'passengerMapView',
    privacy = 'privacy',
    termsConditions = 'termsConditions',
    drawerMain = 'drawerMain',
    main = 'main'
}

export interface IRoute{
    title: Routes,
    params: { [key: string]: string; }
}

export default Routes;
