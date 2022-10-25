# DOWNLOAD NEW SCHEMA
apollo service:download --endpoint=https://mediasetplay-preprod.api-graph.mediaset.it

# CODE GENERATE 
apollo codegen:generate --localSchemaFile=schema.json --includes="./graphqls/*.graphql" --target=typescript --tagName=gql


apollo codegen:generate --localSchemaFile="schema.json" --target=typescript --includes="./graphqls/*.graphql" --tagName=gql --addTypename types


apollo codegen:generate \
--localSchemaFile="schema.json" \
--addTypename \
--passthroughCustomScalars \
--target=typescript \
--includes="./queries/*.ts" \
--namespace="medgraphql" \
--tagName=gql \
--outputFlat="generated"