
import MarsProbeComponent from "./MarsProbe/MarsPhotos.js";
import { getCuriosityPhotos, getOpportunityPhotos, getSpiritPhotos } from "./MarsProbe/MarsProbeData.js";
import { getOTDPhotos } from "./PhotoOTD/PhotoOTDDataProvider.js";
import PhotoOTDComponent from "./PhotoOTD/PhotoOTD.js";
import OTDComponent from "./PhotoOTD/OTD.js";




getCuriosityPhotos()
.then(getOpportunityPhotos)
.then(getSpiritPhotos)
.then(MarsProbeComponent)
.then(getOTDPhotos)
.then(PhotoOTDComponent)