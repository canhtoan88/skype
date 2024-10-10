const generateClientMessageId =  require('./generate-message-id');

const chatIds = {
  HEHE: '19:f2cfe37eaf04437b84964c62f0b0993a@thread.skype',
  DANH: '8:live:.cid.de940f6db716504b',
}

const sendMessage = async (message) => {
  // const auth = await fetch('https://login.skype.com/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: JSON.stringify({
  //     username: '',
  //     password: '',
  //   }),
  // });

  // const data = await auth.text();

  // console.log('data :>> ', data);

  const url = `https://msgapi.teams.live.com/v1/users/ME/conversations/${chatIds.DANH}/messages?x-ecs-etag="22E0RRwy0/U1lLZ5dRNCboAzGhlSTNixBrTPFTyxwrc="`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      behavioroverride: 'redirectAs404',
      clientinfo: 'os=OSX; osVer=10.15.7; proc=x86; lcid=en-US; deviceType=1; country=VN; clientName=skype4life; clientVer=1418/8.129.0.202//skype4life; timezone=Asia/Saigon',
      Authentication: `skypetoken=${process.env.SKYPE_TOKEN}`,
      registrationtoken: `registrationToken=${process.env.REGISTRATION_TOKEN}`,
    },
    body: JSON.stringify({
      clientmessageid: generateClientMessageId(),
      composetime: new Date().toISOString(),
      content: message,
      messagetype: "RichText",
      contenttype: "text",
      imdisplayname: "Removed Account",
    })
  });

  const data = await response.json();

  console.log('data :>> ', data);
}

module.exports = sendMessage;
