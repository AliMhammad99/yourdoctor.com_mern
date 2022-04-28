import SpecialtyDAO from "../dao/SpecialtyDAO.js";

export default class SpecialtyController {
  static async apiGetSpecialty(req, res, next) {
    const specialtiesPerPage = req.query.specialtiesPerPage
      ? parseInt(req.query.specialtiesPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.specialty_name) {
      filters.specialty_name = req.query.specialty_name;
    }

    const { specialties, totalNumSpecialties } =
      await SpecialtyDAO.getSpecialty({ filters, page, specialtiesPerPage });
    let response = {
      specialties: specialties,
      page: page,
      filters: filters,
      entries_per_page: specialtiesPerPage,
      total_results: totalNumSpecialties,
    };
    res.json(response);
  }
}
