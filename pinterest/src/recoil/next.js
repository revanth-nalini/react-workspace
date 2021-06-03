import {atom} from 'recoil'

export const nextState = atom({
  key: 'next',
  default: null
});

export const queryState = atom({
  key: 'query',
  default: ''
})