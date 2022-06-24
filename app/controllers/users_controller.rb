class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    wrap_parameters format: []

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: 200
    end
    #returns user info with experiments and chemicals associated with each experiment
    def experiments
        current_user = User.find(params[:user_id])
        experiments = current_user.experiments
        render json: experiments, status: 200
    end



    private

    def user_params
        params.permit(:username, :password)
    end
end
