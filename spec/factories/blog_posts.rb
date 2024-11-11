FactoryBot.define do
  sequence(:title) { |n| "#{Faker::Book.title}#{n}" }
  sequence(:slug) { |n| "#{Faker::Internet.slug}#{n}" }

  factory :blog_post do
    title { generate(:title) }
    slug { generate(:slug) }
    description { Faker::Lorem.sentences(number: 2).join }
    body { Faker::Lorem.paragraphs(number: 5, supplemental: true).join }

    trait :draft do
      draft { true }
    end

    trait :published do
      draft { false }
    end
  end
end
