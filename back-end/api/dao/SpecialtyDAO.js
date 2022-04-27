//Used to store a reference for the specialty collection
let specialty;

export default class SpecialtyDAO {
  static async injectDB(conn) {
    if (specialty) {
      return;
    }
    try {
      specialty = await conn
        .db(process.env.YOUR_DOCTOR_NS)
        .collection("specialty");
    } catch (e) {
      console.error(
        "Unable to establish a collection handle in SpecialtyDAO: " + e
      );
    }
  }
  static async getAllSpecialties({
    filters = null,
    page = 0,
    specialtyPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("specialty_name" in filters) {
        query = { "specialty_name": { $search: filters["specialty_name"] } };
      }
    }
    let cursor
    try{
        cursor = await specialty.find(query)
    }catch
  }
  

}
