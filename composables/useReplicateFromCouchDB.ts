import pouchDBConnect from "@/utilities/pouchDbConnect";
const toast = useToast()


const config = useRuntimeConfig();
const couchDBUsername = config.public.couchDBUsername;
const couchDBPassword = config.public.couchDBPassword;


const useReplicateToCouchDB = async (databaseName: string ): Promise<any> => {

    //setup
    const localDB = pouchDBConnect(databaseName)
    const remoteDB = pouchDBConnect(`${config.public.couchDBUrl}/` + databaseName, {
        skip_setup: true,
      })
    
    //sync
   return remoteDB.logIn(couchDBUsername, couchDBPassword).then(() => {
      return   localDB.replicate.from(remoteDB, {
          live: true,
          retry: true,
        })
          .on("paused", () => {
            console.log("complete: ",config.public.couchDBUrl, remoteDB , localDB);
            toast.add({
                title: `You have successifully synced ${databaseName}`,
                color: 'sky'
              })
           return true;
          })
          .on("denied", (denied) => {
            console.log(databaseName, denied);
            toast.add({
                title: `Syncing ${databaseName} has been denied`,
                color: 'rose'
              })
          })
          .on("error", (err: any) => {
            console.error(databaseName, err);
            toast.add({
                title: `Syncing ${databaseName} has an error, please contact admin`,
                color: 'rose'
              })
          });
      })
      .catch((err: any) => {
        console.error("Remote Login Error", err);
        toast.add({
            title: `Syncing ${databaseName} has been denied, please check your credentials`,
            color: 'rose'
          })
      });
      
    
    }
    
    export default useReplicateToCouchDB;