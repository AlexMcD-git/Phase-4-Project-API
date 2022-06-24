class User < ApplicationRecord
    has_many :experiments
    has_secure_password
end
