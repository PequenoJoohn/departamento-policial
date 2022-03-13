const Formater = {
  moneyFormater(value) {
    const formatMoney = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
    return formatMoney;
  },

  dateFormater(date) {
    const dateParse = new Date(Date.parse(date));
    return `${(dateParse.getDate() > 9) ? dateParse.getDate() : (`0${dateParse.getDate()}`)}/${(dateParse.getMonth() > 8) ? (dateParse.getMonth() + 1) : (`0${dateParse.getMonth() + 1}`)}/${dateParse.getFullYear()}`;
  },
};

export default Formater;
