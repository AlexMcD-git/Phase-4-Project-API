class ChemicalsController < ApplicationController
    wrap_parameters format: []
    def index
        chemicals = Chemical.all
        render json: chemicals, status: 200
    end

    def create
        chemical = Chemical.create!(chemical_params)
        render json: chemical, status: :created
    end

    def update
        chemical = Chemical.find(params[:id])
        chemical.update!(chemical_params)
        render json: chemical
    end

    def destroy
        chemical = Chemical.find(params[:id])
        chemical.destroy
    end

    private

    def chemical_params
        params.permit(:name, :amount_in_grams, :location)
    end


end
