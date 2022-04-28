//Used to store a reference for the specialty collection
let specialty;

export default class SpecialtyDAO {
  static async injectDB(conn) {
    if (specialty) {
      return;
    }
    try {
      console.log(conn);
      console.log("DB--------------------\n");
      console.log(conn.db);
      specialty = await conn
        .db(process.env.YOUR_DOCTOR_NS)
        .collection("specialty");
    } catch (e) {
      console.error(
        "Unable to establish a collection handle in SpecialtyDAO: " + e
      );
    }
  }

  static async getSpecialty({
    filters = null,
    page = 0,
    specialtiesPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("specialty_name" in filters) {
        query = { specialty_name: { $eq: filters["specialty_name"] } };
      }
    }
    let cursor;
    try {
      cursor = await specialty.find(query);
    } catch (e) {
      console.error("Unable to execute find command: " + e);
      return { specialties: [], totalNumSpecialties: 0 };
    }
    const displayCursor = cursor
      .limit(specialtiesPerPage)
      .skip(specialtiesPerPage * page);

    try {
      const specialties = await displayCursor.toArray();
      const totalNumSpecialties = await specialty.countDocuments(query);
      return { specialties, totalNumSpecialties };
    } catch (e) {
      console.error(
        "Unable to convert cursor to array or problem counting documents: " + e
      );
      return { specialties: [], totalNumSpecialties: 0 };
    }
  }
}
