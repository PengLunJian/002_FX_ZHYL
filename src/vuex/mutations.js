const mutations = {
  UPDATE_DEFAULT_CARD(state, data) {
    state.DEFAULT_CARD.ID = data.Id;
    state.DEFAULT_CARD.NAME = data.Name;
    state.DEFAULT_CARD.CARD_NO = data.CardNo;
    state.DEFAULT_CARD.QR_CODE = data.QrcodeBase64;
    state.DEFAULT_CARD.BAR_CODE = data.BarcodeBase64;
  }
};

export default mutations;
