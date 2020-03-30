import React, { useState } from "react";
import { ScatterContext } from "./Context";
import $ from "jquery";
import { useDispatch } from "react-redux";

const ScatterProvider = ({ children }) => {
  const [isInitByUser, setIsInitByUser] = useState();
  const [isInitializing, setIsInitializing] = useState(false);
  const [init_count, setInit_count] = useState(0);

  //-----
  const [allaMoney, setAllaMoney] = useState(null);
  const [userInfo, setUserInfo] = useState({
    user: "",
    publicKey: "",
    signed: ""
  });

  const onClickArbitrarySignatureTest = async () => {
    let baseString = "allatester43";
    let result = await window.num21eos.requestArbitrarySignatureForTicket(
      baseString,
      baseString
    );
    console.log(result);
    setUserInfo({
      user: result.userId,
      publicKey: result.publicKey,
      signed: result.sig
    });
  };
  const onClickBalanceTest = async () => {
    onClickArbitrarySignatureTest();
    let contractAccount = "allaglobalio";
    let account = "allatester43";
    let symbol = "ALLA";
    window.numHttpEos.isMainNet = true;
    window.nonLoginEos.isMainNet = true;
    window.nonLoginEos.getCurrencyBalance(
      contractAccount,
      account,
      symbol,
      function(result) {
        console.log(result[0].split(" "));
        setAllaMoney(parseInt(result[0].split(" ")[0]));
      },
      function(result) {
        console.error(result);
      }
    );
  };
  const forget_identity = () => {
    var self = this;
    try {
      //if (confirm($.i18n.t('alert:alert_scatter_disconnect'))) {
      // self.clearAuthTicket();
      // self.clearWebStorage();
      window.num21eos.sco
        .forgetIdentity({ accounts: [window.nonLoginEos.network] })
        .then(() => {
          // self.requiredFields = null;
          // self.eos = null;
          // self.network = null;
          // self.account = null;
          // self.chainId = null;
        })
        .catch(err => {
          console.error(err + "hello");
        });
      // required for reset scatter
      window.location.reload(true);
      if (self.getLuckyDrawCallFromApp() === true) self.notifyLogoutToApp();
      //}
    } catch (e) {
      console.error(e);
    }
  };

  const init_scatter = (
    isUserAction,
    isInitByUser,
    isInitializing,
    init_count
  ) => {
    let contractAccount = "sevenluckyio";
    let eosEndpoint = "https://mainnet.meet.one/";
    let isMainNet = true;
    let isKylin = false;
    if (eosEndpoint.includes("jungle")) isKylin = false;
    else if (eosEndpoint.includes("kylin")) isKylin = true;
    else {
      isMainNet = true;
    }
    window.numHttpEos.isMainNet = isMainNet;
    window.numHttpEos.isKylin = isKylin;
    window.nonLoginEos.isMainNet = isMainNet;
    console.log("EOS endpoint: " + eosEndpoint);

    window.nonLoginEos.network = window.numHttpEos.getEosNetworkConfig(
      window.numHttpEos.isMainNet
    );

    setTimeout(function() {
      let gameId = "allatest";

      console.log(window.nonLoginEos.network);
      console.log("# before init");
      window.num21eos.init(
        gameId,
        window.nonLoginEos.network,
        true,
        true,
        data => {
          setIsInitializing(true);
          console.log("#scatter init success------------------");
          console.log(window.num21eos);
          onClickBalanceTest();
          // $("#txt_account_name").val(window.num21eos.account.name);
        },
        data => {
          console.log("#scatter init error-----------------");
          console.log(data);
          setIsInitializing(false);
        }
      );
    }, 1000);
    isInitByUser = isUserAction;
    if (isInitializing === true) {
      setInit_count(init_count + 1);
      console.log("already initializing..", isInitializing, init_count);
      if (init_count > 5) {
        forget_identity();
      }
      return;
    }
  };

  const value = {
    isInitByUser,
    isInitializing,
    init_count,
    init_scatter,
    forget_identity,
    allaMoney,
    userInfo
  };
  return (
    <ScatterContext.Provider value={value}>{children}</ScatterContext.Provider>
  );
};

export default ScatterProvider;
