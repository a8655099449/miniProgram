import requset from './network.js'

export function getMianData(){
  return requset({
    url:'/home/multidata'
  })


} 
