class Chemical < ApplicationRecord
    has_many :chemical_experiments, dependent: :destroy
    has_many :chemicals, through: :chemical

    validates :name, presence: true
    validates :amount_in_grams, presence: true
    validates :amount_in_grams, numericality: {greater_than_or_equal_to: 0}
    validates :location, presence: true
end
