import pouchDBConnect from "@/utilities/pouchDbConnect";

const config = useRuntimeConfig();
const couchDBUsername = config.public.couchDBUsername;
const couchDBPassword = config.public.couchDBPassword;

const useSyncWithCouchDB = ( databaseName: string ) => {

    const localDB = pouchDBConnect(databaseName)
    const remoteDB = pouchDBConnect(`${config.public.couchDBUrl}/` + databaseName, {
        skip_setup: true,
      })

        //sync
  remoteDB.logIn(couchDBUsername, couchDBPassword).then(() => {
    localDB.sync(remoteDB, {
      live: true,
      retry: true,
    })
      .on("paused", () => {
        console.log("complete: ",config.public.couchDBUrl, remoteDB , localDB);
        alert(`complete: ${config.public.couchDBUrl}`)
      })
      .on("denied", (denied) => {
        console.log(databaseName, denied);
      })
      .on("error", (err: any) => {
        console.error(databaseName, err);
        alert("replicate failed: " + err);
      });
  })
  .catch((err: any) => {
    console.error("Remote Login Error", err);
    alert(err.message);
  });

}

export default useSyncWithCouchDB