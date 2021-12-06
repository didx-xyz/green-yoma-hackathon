const {makeWallet, makeClient} = require('@ixo/client-sdk')
require("dotenv").config()


const main = async () => { // <- the async wrapper function
  let WALLET_SEED = process.env.WALLET_SEED

  console.log(WALLET_SEED)
    const
      // Wallet with ixo
      wallet = await makeWallet(WALLET_SEED)
        // wallet = await makeWallet('dragon child voice crisp bracket benefit lake dose limit wrist book dragon ask enlist rice best exact oil run frost admit voice island seminar', didPrefix = 'did:ixo:'),
        client = makeClient(wallet)
    // .... rest of your code
    // console.log(wallet);

    try {
      await client.register()


      let projectDID = "did:ixo:4ECxxCYxyYW2vpJv3YkFfQ"
      // let project  = await client.getProject(projectDID)
      // console.log(project)

      await createAgent(client)

      // Lets not do this. I just spammed the network lol
      // createdProject = await client.createProject(projectData)
      // WHAT GETS RETURNED HERE. CAUSE IT AIN'T a DID
      // console.log(createdProject)

      // Project DID
      // let projectDID = "did:ixo:K46BeN6LZq4rbth2AJfGjD"
      // let project  = await client.getProject(projectDID)
      // console.log(project)
      // console.log(await client.getDidDoc())
      // console.log(await client.getAgentAccount())

      // List claims
      // This takes forever to return. Not sure why.
      // let claims = await client.listClaims(projectDID)

      // console.log(claims.data.data.claims)

      //
      // let templates = await client.listTemplates()
      //
      // console.log(templates)

      // let templateId = 'did:ixo:V55sPyDsyfJ6Enb4V9EfXo'
      // let template = await client.getTemplate(templateId)
      // console.log(template)
      // console.log(await client.staking.delegatorRewards(wallet.agent.did.toLowerCase()));

      // claims for template
      // let claimsForTemplate = await client.listClaims(projectDID,templateId)
      // console.log(claimsForTemplate)

    } catch (e) {
      console.log(e)
    }
    //We will need to filter on yoma projects. That is why we want a relayer, so the API will already only return yoma projects.
    // console.log(await client.listClaims('did:ixo:V55sPyDsyfJ6Enb4V9EfXo','')) //tplId is the template id that a specific project use
    // console.log(await client.getSecpAccount())
}


async function createAgent(client) {

  let projectDID = "did:ixo:4ECxxCYxyYW2vpJv3YkFfQ"
  let projectDID2 = "did:ixo:G9HX1eXxT6LRkXR8QtNRjy"
  let ownerDID = "did:sov:CYCc2xaJKrp8Yt947Nc6jd"

  let lohanDID = "did:sov:QFBonAeTtahkZmSnxpsAHx"

  let agentRecord = {
    did: lohanDID,
    email: "someemail",
    name: "somename",
    role: "SA"
  }




  let response = await client.createAgent(projectDID2, agentRecord)

  // console  // let response = await client.createAgent(projectDID2, agentRecord)

  console.log(response)

  let updates = {
    status: "1",
    role: "SA"
  }

  let updateResponse = await client.updateAgent(projectDID2, lohanDID, updates)

  console.log(updateResponse)
}

main()
