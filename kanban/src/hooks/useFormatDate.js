export const UseFormatDate = () => {

    const formateDate = (date) => {
        const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
        const d = day > 10 ? day : "0"+day;
        const m = month > 10 ? month+1 : "0"+(month+1);

        return `${year}-${m}-${d}`
    }

    const formateTime = (date) => {
        const [hour, minutes] = [date.getHours(), date.getMinutes()];
        const h = hour < 10 ? `0${hour}`: hour ;
        const m = minutes  < 10 ? `0${minutes}` : minutes;

        return `${h}:${m}`;
    }

    return [formateDate, formateTime];

}