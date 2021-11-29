const {makeWallet, makeClient} = require('@ixo/client-sdk')

const projectData = {
  "@context": "https://schema.ixo.foundation/entity:2383r9riuew",
  "@type": "Project",
  schemaVersion: "1.0.0",
  name: "Some Title",
  description: "Some Short Description",
  image: "https://pds_pandora.ixo.world/public/sbujb0xg0dgkeljwtnc",
  imageDescription: "Some Image Description",
  location: "AR",
  sdgs: ["5", "7"],
  startDate: "2020-09-17T00:00:00.000Z",
  endDate: "2020-10-23T00:00:00.000Z",
  status: "Live",
  stage: "Planning",
  relayerNode: "xxx",
  version: {
    versionNumber: "1.0.5",
    effectiveDate: "2020-09-15T00:00:00.000Z",
    notes: "Some version notes"
  },
  terms: {
    "@type": "OnceOffFee",
    paymentTemplateId: "payment:template:1234567890"
  },
  privacy: {
    pageView: "Private",
    entityView: "Visible",
    credentials: [{
      credential: "somecredential",
      issuer: "did:sov:CYCc2xaJKrp8Yt947Nc6jd99"
    }, {
      credential: "anothercredential",
      issuer: "did:sov:CYCc2xaJKrp8Yt947Nc6jd66"
    }]
  },
  creator: {
    displayName: "Creator Display Name",
    location: "AD",
    email: "ert@dfssdf.com",
    website: "https://blah.com",
    mission: "Some mission",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jd1",
    credentialId: "did:sov:CYCc2xaJKrp8Yt947Nc6jd2",
    logo: "https://pds_pandora.ixo.world/public/8520qk1ckqvkelkjfeg"
  },
  owner: {
    displayName: "Owner Display Name",
    location: "AQ",
    email: "eeeert@dfssdf.com",
    website: "https://eerer.com",
    mission: "another mission",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jd6",
    logo: "https://pds_pandora.ixo.world/public/9uqcsf7qsfjkelkkkt9"
  },
  ddoTags: [{
    category: "Project Type",
    tags: ["Index", "Accreditation", "Accountability", "Insurance Bond"]
  }, {
    category: "SDG",
    tags: ["SDG3 – Good Health and Well-being", "SDG15 – Life on Land", "SDG16 – Peace, Justice and Strong Institutions", "SDG17 – Partnerships for Goals"]
  }, {
    category: "Stage",
    tags: ["Planning"]
  }],
  displayCredentials: {
    "@context": "https://www.w3.org/2018/credentials/v1",
    items: [{
      credential: "somecredential1",
      badge: "https://somebadge.com"
    }, {
      credential: "somecredential2",
      badge: "https://anotherbadge.com"
    }]
  },
  page: {
    cid: "somepageid",
    version: "1.0.0"
  },
  claims: {
    "@context": "https://schema.ixo.world/claims:3r08webu2eou",
    items: [{
      "@id": "template:did:2",
      visibility: "Private",
      title: "Some Claim Title 1",
      description: "Some Claim Description 1",
      targetMin: 23,
      targetMax: 45,
      startDate: "2020-09-25T00:00:00.000Z",
      endDate: "2020-10-22T00:00:00.000Z",
      agents: [{
        role: "PO",
        credential: "Credential 1",
        autoApprove: true
      }, {
        role: "SA",
        credential: "Credential 2",
        autoApprove: false
      }, {
        role: "IA",
        credential: "Credential 3",
        autoApprove: true
      }],
      claimEvaluation: [{
        "@context": "somecontext1",
        "@id": "somelinktocontext1",
        methodology: "somemethodology1",
        attributes: ["attr1", "attr2"]
      }, {
        "@context": "somecontext2",
        "@id": "somelinktocontext2",
        methodology: "somemethodology2",
        attributes: ["attr1", "attr2", "attr3"]
      }],
      claimApproval: [{
        "@context": "somecontext1",
        "@id": "somelink1",
        condition: "somecondition1",
        attributes: ["criteria1", "criteria2", "criteria3", "criteria4"]
      }],
      claimEnrichment: [{
        "@context": "somecontext1",
        "@id": "somelink1",
        productId: "someproductid1",
        resources: ["res1", "res2", "res3"]
      }, {
        "@context": "somecontext2",
        "@id": "somelink2",
        productId: "someproductid2",
        resources: ["res1", "res2"]
      }]
    }]
  },
  linkedEntities: [{
    "@type": "Investment",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdqq"
  }, {
    "@type": "Oracle",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdtt"
  }],
  fees: {
    "@context": "https://schema.ixo.world/fees/ipfs3r08webu2eou",
    // items: [{
    //   "@type": "RentalFee",
    //   id: "payment:template:1234567890" // NOTE: payment template has to exist, so we leave it out in this example to not have to create it
    // }]
    items: []
  },
  stake: {
    "@context": "https://schema.ixo.world/staking/ipfs3r08webu2eou",
    items: [{
      "@type": "PerformanceGuarantee",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdvv",
      denom: "IXO",
      stakeAddress: "abcccsdfsdfdsfdsfsdf",
      minStake: 12,
      slashCondition: "FailedDispute",
      slashFactor: 45,
      slashAmount: 66,
      unbondPeriod: 23
    }]
  },
  nodes: {
    "@context": "https://schema.ixo.world/nodes/ipfs3r08webu2eou",
    items: [{
      "@type": "IBCNode",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbb"
    }, {
      "@type": "CellNode",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdzz"
    }]
  },
  funding: {
    "@context": "https://schema.ixo.world/funding/ipfs3r08webu2eou",
    items: [{
      "@type": "AlphaBond",
      id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdzzzz"
    }]
  },
  keys: {
    "@context": "https://www.w3.org/ns/did/v1",
    items: [{
      purpose: "Encryption",
      "@type": "JwsVerificationKey2020",
      controller: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbbbbb",
      keyValue: "eEUR",
      dateCreated: "2020-09-18T00:00:00.000Z",
      dateUpdated: "2020-10-28T00:00:00.000Z",
      signature: "somesignature"
    }]
  },
  service: [{
    "@type": "DIDAgent",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbbbnn",
    serviceEndpoint: "https://someurl",
    description: "some short description",
    publicKey: "somepubkey",
    properties: "otherparams"
  }],
  data: [{
    "@type": "PersonalDataPod",
    id: "did:sov:CYCc2xaJKrp8Yt947Nc6jdbgfd",
    serviceEndpoint: "https://blah.com",
    properties: "otherparams"
  }]
}

const main = async () => { // <- the async wrapper function

    const
      // Wallet with ixo
      wallet = await makeWallet('quantum elevator attitude ghost cool allow exercise spare cute truck blanket forward')
        // wallet = await makeWallet('dragon child voice crisp bracket benefit lake dose limit wrist book dragon ask enlist rice best exact oil run frost admit voice island seminar', didPrefix = 'did:ixo:'),
        client = makeClient(wallet)
    // .... rest of your code
    // console.log(wallet);

    try {
      await client.register()

      // Lets not do this. I just spammed the network lol
      // createdProject = await client.createProject(projectData)
      // WHAT GETS RETURNED HERE. CAUSE IT AIN'T a DID
      // console.log(createdProject)

      // Project DID
      let projectDID = "did:ixo:K46BeN6LZq4rbth2AJfGjD"
      let project  = await client.getProject(projectDID)
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

      let templateId = 'did:ixo:V55sPyDsyfJ6Enb4V9EfXo'
      let template = await client.getTemplate(templateId)
      console.log(template)
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
main()
