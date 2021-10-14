import moment from "moment";

export function DataGraphic(timestamp){
    moment.locale('pt-br')
    return moment.utc(timestamp * 1000).format('DD/MM')
} 