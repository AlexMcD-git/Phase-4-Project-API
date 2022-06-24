class ChemicalExperimentsController < ApplicationController
    def create
        chemical_experiment = ChemicalExperiment.create!(chemical_experiment_params)
        associated_experiment = chemical_experiment.experiment
        render json: associated_experiment, status: :created
    end

    def destroy
        chemical_experiment = ChemicalExperiment.find_by(chemical_experiment_params)
        chemical_experiment.destroy
    end

    private
    def chemical_experiment_params
        params.permit(:chemical_id, :experiment_id)
    end
end
