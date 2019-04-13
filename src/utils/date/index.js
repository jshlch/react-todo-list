export const 	getCurrentDate = () => {
	const today = new Date();
	const currentDate = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
	return currentDate
}