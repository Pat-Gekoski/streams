import React from 'react'
import { unstable_HistoryRouter as HistoryRouter,  Routes, Route } from 'react-router-dom'
import history from '../history'

import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

export default function App() {
   return (
      <div className='ui container'>
         <HistoryRouter history={history}>
            <Header />
            <Routes>
               <Route path='/' element={<StreamList />} />
               <Route path='/streams/new' element={<StreamCreate />} />
               <Route path='/streams/edit/:id' element={<StreamEdit />} />
               <Route path='/streams/delete/:id' element={<StreamDelete />} />
               <Route path='/streams/show' element={<StreamShow />} />
            </Routes>
         </HistoryRouter>
      </div>
   )
}
