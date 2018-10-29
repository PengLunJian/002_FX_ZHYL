const mutations = {
  updateDefaultCard: (state, action) => {
    const {data} = action;
    state.DEFAULT_CARD.ID = data.Id;
    state.DEFAULT_CARD.NAME = data.Name;
    state.DEFAULT_CARD.DEFAULT_CARD_NO = data.CardNo;
    state.DEFAULT_CARD.QR_CODE_BASE64 = data.QrcodeBase64;
    state.DEFAULT_CARD.BAR_CODE_BASE64 = data.BarcodeBase64;
    state.DEFAULT_CARD.HASED = data.Id ? true : false;
  }
};

export default mutations;
