import Routes from "@/constants/Routes";
import LocalStorageKeys from "@/constants/LocalStorageKeys";

export const useFacilitiesStore = defineStore('facilities', () => {

    const districtFacilities = localStorage.getItem(LocalStorageKeys.FACILITIES_FOR_SELECTED_DISTRICT);

    const facilities = ref('');
    
    if(districtFacilities){
        facilities.value = districtFacilities;
    }

    const saveGoingFacility = async (facilityName: string) => {

        localStorage.setItem(LocalStorageKeys.SELECTED_FACILITY, facilityName);

        await navigateTo(Routes.MENTEES)

    }

   
    return { facilities, saveGoingFacility }

})