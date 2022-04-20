import { configureStore } from '@reduxjs/toolkit'
// import { contactsSlice } from './contactsSlice'
import items from './contacts/contacts-reducer'

export const store = configureStore({
  reducer: {contacts: items
  },
})

