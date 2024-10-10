import generateClientMessageId from "./generate-message-id";

const sendMessage = async (content: string, conversationId: string) => {
  const url = `https://msgapi.teams.live.com/v1/users/ME/conversations/${conversationId}/messages?x-ecs-etag="22E0RRwy0/U1lLZ5dRNCboAzGhlSTNixBrTPFTyxwrc="`
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
      content,
      messagetype: "RichText",
      contenttype: "text",
      imdisplayname: "Removed Account",
    })
  });

  const data = await response.json();

  console.log('data :>> ', data);
  // data :>>  { OriginalArrivalTime: 1728544718322 }
}

export default sendMessage;
