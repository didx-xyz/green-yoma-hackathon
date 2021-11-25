const {makeWallet, makeClient} = require('@ixo/client-sdk')

const main = async () => { // <- the async wrapper function

    const
        wallet = await makeWallet('dragon child voice crisp bracket benefit lake dose limit wrist book dragon ask enlist rice best exact oil run frost admit voice island seminar', didPrefix = 'did:ixo:'),
        client = makeClient(wallet)
    // .... rest of your code
    console.log(wallet);
    console.log(client);
}
main()