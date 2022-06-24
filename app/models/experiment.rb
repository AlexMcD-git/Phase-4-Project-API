class Experiment < ApplicationRecord
    has_many :chemical_experiments, dependent: :destroy
    has_many :chemicals, through: :chemical_experiments
    belongs_to :user

    validates :user_id, presence: true
    validates :description, presence: true

end
