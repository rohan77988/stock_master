const config = {
    cognito_pool_id: "ap-south-1_5kz2p18G8",
    cognito_backend_client_id: "26h19emdes6f89kmsuujt7dtgm",
    cognito_backend_access_key: "stockMonitoring/local1/backend",
    appsync_endpoint_url: "https://ncqdpfwgsfefdecqff4w3obtfm.appsync-api.ap-south-1.amazonaws.com/graphql",
    appsync_region: "ap-south-1",
    data_feed_key: "stockMonitoring/local1/datafeed",
    feed_interval: "30min"
}

module.exports=config;