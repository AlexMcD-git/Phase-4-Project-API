class Experiment < ApplicationRecord
    has_many :chemical_experiments, dependent: :destroy
    has_many :chemicals, through: :chemical_experiments
    belongs_to :user

    validates :user_id, presence: true
    validates :description, presence: true
    validates :is_complete, presence: true
    validates :is_complete, inclusion: [true, false]
end
