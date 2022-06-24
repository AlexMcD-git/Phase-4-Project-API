class ExperimentsController < ApplicationController
    def create
        experiment= Experiment.create!(experiment_params)
        render json: experiment, status: :created
    end

    private
    def experiment_params
        params.permit(:user_id, :description, :is_complete)
    end
end
