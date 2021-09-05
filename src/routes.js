import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from './components/Main'
import History from './components/History'
import Faqs from './components/FAQs'
import PlasticDashboardExports from './components/PlasticDashboardExports'
import WeaponsDashboardExports from './components/WeaponsDashboardExports'  
import FuelsDashboardExports from './components/FuelsDashboardExports'
import AgrarianIndustryDashboardExports from './components/AgrarianIndustryDashboardExports'
import Etl from './components/ETL'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/faqs' component={ Faqs } />
          <Route exact path='/' component={ Main } />
          <Route exact path='/etl' component={ Etl } />
          <Route exact path='/history' component={ History } />
          <Route exact path='/cuadro-de-mandos-plastico-exports' component={ PlasticDashboardExports } />
          <Route exact path='/cuadro-de-mandos-armas-exports' component={ WeaponsDashboardExports } />
          <Route exact path='/cuadro-de-mandos-combustibles-fosiles-exports' component={ FuelsDashboardExports } />
          <Route exact path='/cuadro-de-mandos-agrarian-industry' component={ AgrarianIndustryDashboardExports } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )