import pouchDBConnect from "@/utilities/pouchDbConnect";
import PouchDB from "pouchdb";

const config = useRuntimeConfig();
const couchDBUsername = config.public.couchDBUsername;
const couchDBPassword = config.public.couchDBPassword;


const useReplicateToCouchDB = async (databaseName: string ) => {

    //setup
    const localDB = pouchDBConnect(databaseName)
    const remoteDB = pouchDBConnect(`${config.public.couchDBUrl}/` + databaseName, {
        skip_setup: true,
      })
    
    //sync
         try {
            await remoteDB.logIn(couchDBUsername, couchDBPassword);
            
           const syncHandler = await PouchDB.replicate(localDB, remoteDB, {
                live: true,
                retry: true
            }).on('change', (change: { last_seq: any; }) => {
                var lastSeq = change.last_seq;
                console.log("lastSeq is: " + lastSeq);
    
            }).on('paused', () => {
                console.log('complete');
            }).on('complete', (info: { status: any; }) => {
                console.log(databaseName, info.status);
                
            }).on('error', (err: any) => {
                console.error(databaseName, err);
            });
    
          console.log('status', syncHandler.status)  
    
        } catch (err_1) {
            console.error('Remote Login Error', err_1);
        }
    
    }
    
    export default useReplicateToCouchDB;