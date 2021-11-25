const {makeWallet, makeClient} = require('@ixo/client-sdk')

const main = async () => { // <- the async wrapper function

    const
        wallet = await makeWallet('dragon child voice crisp bracket benefit lake dose limit wrist book dragon ask enlist rice best exact oil run frost admit voice island seminar', didPrefix = 'did:ixo:'),
        client = makeClient(wallet)
    // .... rest of your code
    console.log(wallet);
    console.log(await client.staking.delegatorRewards('ixoabcdef'));
    console.log(await client.listProjects()) //We will need to filter on yoma projects. That is why we want a relayer, so the API will already only return yoma projects.
    // console.log(await client.listClaims('did:ixo:V55sPyDsyfJ6Enb4V9EfXo','')) //tplId is the template id that a specific project use
    // console.log(await client.getSecpAccount())
}
main()